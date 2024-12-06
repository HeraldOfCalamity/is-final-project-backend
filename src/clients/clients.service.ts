import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

let CLIENTS: Client[] = [
  {
    id: '1',
    name: 'Juan',
    lastname: 'Contreras',
    username: 'JContrerasU',
    coordenates: [2, 2],
  },
  {
    id: '2',
    name: 'Mike',
    lastname: 'Peredo',
    username: 'MPeredoV',
    coordenates: [2, 2],
  },
  {
    id: '3',
    name: 'Pedro',
    lastname: 'Galindo',
    username: 'PGalindoX',
    coordenates: [2, 2],
  },
  {
    id: '4',
    name: 'Ronal',
    lastname: 'Medina',
    username: 'RMedinaO',
    coordenates: [2, 2],
  },
  {
    id: '5',
    name: 'Juaquin',
    lastname: 'Rodriguez',
    username: 'JRodriguezT',
    coordenates: [2, 2],
  },
  {
    id: '6',
    name: 'Gonzalo',
    lastname: 'Burgos',
    username: 'GBurgosK',
    coordenates: [2, 2],
  },
];

@Injectable()
export class ClientsService {
  create(createClientDto: CreateClientDto) {
    const client: Client = {
      id: Math.random().toString(6),
      ...createClientDto,
    };
    CLIENTS.push(client);
    return `Created client: ${JSON.stringify(client)}`;
  }

  findAll() {
    const clients = [...CLIENTS];
    return clients;
  }

  findOne(id: string) {
    const foundedClient = CLIENTS.find((c) => c.id === id);
    return foundedClient;
  }

  update(id: string, updateClientDto: UpdateClientDto) {
    CLIENTS = CLIENTS.map((c) => {
      if (c.id === id) {
        c.name = updateClientDto.name;
        c.coordenates = updateClientDto.coordenates;
        c.lastname = updateClientDto.lastname;
        c.username = updateClientDto.username;
      }
      return c;
    });

    return `Updated client: ${JSON.stringify(updateClientDto)}`;
  }

  remove(id: string) {
    CLIENTS = CLIENTS.filter((c) => c.id !== id);
    return `Deleted client with id: ${id}.`;
  }
}
