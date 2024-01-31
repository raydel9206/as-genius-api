import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Code } from 'src/code/entities/code.entity';
import { InjectModel } from '@nestjs/mongoose';
import HandlerException from 'src/function/HandlerException';
import { CreateCodeDto } from 'src/code/dto/create-code.dto';
import { generateRandomCode } from 'src/function/GlobalFunctions';
import { ValidateCodeDto } from 'src/code/dto/validate-code.dto';

@Injectable()
export class CodeService {
  constructor(
    @InjectModel(Code.name)
    private readonly codeModel: Model<Code>,
  ) {}

  async create(createCode: CreateCodeDto) {
    try {
      const code = await this.codeModel.create({
        owner: createCode.user,
        createdAt: new Date(),
        updatedAt: new Date(),
        code: generateRandomCode(),
      });
      return code;
    } catch (e) {
      HandlerException(e, Code.name);
    }
  }

  async validate(validateCode: ValidateCodeDto): Promise<Code> {
    try {
      const code = await this.codeModel.findOne({
        code: validateCode.code,
        owner: validateCode.user.id,
      });
      if (!code) {
        throw new Error(`The code ${validateCode.code} provided not exist`);
      }
      if (code.usedAt != null) {
        throw new Error(`The code ${validateCode.code} provided has used`);
      }

      await code.updateOne({ usedAt: new Date() }, { new: true });

      return { ...code.toJSON(), usedAt: new Date() };
    } catch (e) {
      HandlerException(e, Code.name);
    }
  }
}
