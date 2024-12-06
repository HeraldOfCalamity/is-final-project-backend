import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class UpdateTerrainDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsArray()
  @ArrayMinSize(3)
  @ValidateNested({ each: true })
  @IsOptional()
  shape: [number, number][];
}
