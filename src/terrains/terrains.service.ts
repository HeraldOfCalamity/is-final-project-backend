import { Injectable } from '@nestjs/common';
import { CreateTerrainDto } from './dto/create-terrain.dto';
import { UpdateTerrainDto } from './dto/update-terrain.dto';
import { Terrain } from './entities/terrain.entity';
import { PrismaService } from 'src/prisma.service';

let TERRAINS: Terrain[] = [
  {
    id: '1',
    name: 'Terreno 1',
    shape: [
      [-17.413381, -66.046535],
      [-17.413294, -66.046478],
      [-17.413287, -66.046445],
      [-17.413395, -66.046266],
      [-17.413501, -66.046342],
    ],
  },
  {
    id: '2',
    name: 'Terreno 2',
    shape: [
      [-17.413501, -66.046342],
      [-17.413395, -66.046266],
      [-17.413502, -66.046089],
      [-17.413536, -66.046081],
      [-17.413619, -66.046134],
    ],
  },
  {
    id: '3',
    name: 'Terreno 3',
    shape: [
      [-17.413453, -66.04658],
      [-17.413381, -66.046535],
      [-17.413501, -66.046342],
      [-17.413575, -66.046387],
    ],
  },
  {
    id: '4',
    name: 'Terreno 4',
    shape: [
      [-17.413575, -66.046387],
      [-17.413501, -66.046342],
      [-17.413619, -66.046134],
      [-17.413694, -66.046187],
    ],
  },
  {
    id: '5',
    name: 'Terreno 5',
    shape: [
      [-17.413529, -66.046632],
      [-17.413453, -66.04658],
      [-17.413575, -66.046387],
      [-17.413652, -66.046435],
    ],
  },
  {
    id: '6',
    name: 'Terreno 6',
    shape: [
      [-17.413652, -66.046435],
      [-17.413575, -66.046387],
      [-17.413694, -66.046187],
      [-17.413767, -66.046241],
    ],
  },
  {
    id: '7',
    name: 'Terreno 7',
    shape: [
      [-17.413607, -66.046683],
      [-17.413529, -66.046632],
      [-17.413652, -66.046435],
      [-17.413726, -66.046489],
    ],
  },
  {
    id: '8',
    name: 'Terreno 8',
    shape: [
      [-17.413726, -66.046489],
      [-17.413652, -66.046435],
      [-17.413767, -66.046241],
      [-17.413847, -66.046289],
    ],
  },
  {
    id: '9',
    name: 'Terreno 9',
    shape: [
      [-17.413763, -66.046743],
      [-17.413718, -66.046755],
      [-17.413607, -66.046683],
      [-17.413726, -66.046489],
      [-17.41384, -66.046568],
    ],
  },
  {
    id: '10',
    name: 'Terreno 10',
    shape: [
      [-17.41384, -66.046568],
      [-17.413726, -66.046489],
      [-17.413847, -66.046289],
      [-17.413909, -66.046338],
      [-17.413925, -66.046379],
    ],
  },
];

@Injectable()
export class TerrainsService {
  constructor(private prisma: PrismaService) {}
  create(createTerrainDto: CreateTerrainDto) {
    // const terrain: Terrain = {
    //   id: Math.random().toString(),
    //   ...createTerrainDto,
    // };
    // TERRAINS.push(terrain);
    // return `Created terrain: ${JSON.stringify(terrain)}`;
    return this.prisma.terrain.create({ data: createTerrainDto });
  }

  findAll() {
    // const terrains = [...TERRAINS];
    // return terrains;
    return this.prisma.terrain.findMany();
  }

  findOne(id: string) {
    // const foundedTerrain = TERRAINS.find((t) => t.id === id);
    // return foundedTerrain;
    return this.prisma.terrain.findFirst({ where: { id: id } });
  }

  update(id: string, updateTerrainDto: UpdateTerrainDto) {
    // TERRAINS = TERRAINS.map((t) => {
    //   if (t.id === id) {
    //     t.name = updateTerrainDto.name;
    //     t.shape = updateTerrainDto.shape;
    //   }
    //   return t;
    // });

    // return `Updated terrain: ${JSON.stringify(updateTerrainDto)}`;
    return this.prisma.terrain.update({
      where: { id: id },
      data: updateTerrainDto,
    });
  }

  remove(id: string) {
    // TERRAINS = TERRAINS.filter((t) => t.id !== id);
    // return `Deleted terrain with id: ${id}.`;
    return this.prisma.terrain.delete({ where: { id: id } });
  }
}
