import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Code, CodeSchema } from 'src/module/code/entities/code.entity';
import { CodeService } from 'src/module/code/providers/code.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Code.name,
        schema: CodeSchema,
      },
    ]),
  ],
  providers: [CodeService],
  exports: [CodeService],
})
export class CodeModule {}
