import { IAddress } from './../interfaces/user/address.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(address: IAddress ): string {
   const INVALID_ADDRESS =
    !address ||
    !address.rua ||
    !address.cidade ||
    !address.estado ||
    address.numero === null || address.numero === undefined;
   if (INVALID_ADDRESS) {
    return 'Endereço indisponível ou inválido';
   }
   return `${address.rua}, ${address.numero} - ${address.cidade} - ${address.estado}`;

  }

}
