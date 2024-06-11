import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public salesOptions = [
    { name: 'Apartaestudio', url: 'https://vistainmobiliaria.inmo.co/s/apartaestudio/venta?id_property_type=14&business_type%5B0%5D=for_sale' },
    { name: 'Apartamento', url: 'https://vistainmobiliaria.inmo.co/s/apartamento/venta?id_property_type=2&business_type%5B0%5D=for_sale' },
    { name: 'Bodega', url: 'https://vistainmobiliaria.inmo.co/s/bodega/venta?id_property_type=8&business_type%5B0%5D=for_sale' },
    { name: 'Cabaña', url: 'https://vistainmobiliaria.inmo.co/s/cabana/venta?id_property_type=28&business_type%5B0%5D=for_sale' },
    { name: 'Casa', url: 'https://vistainmobiliaria.inmo.co/s/casa/venta?id_property_type=1&business_type%5B0%5D=for_sale' },
    { name: 'Casa Campestre', url: 'https://vistainmobiliaria.inmo.co/s/casa-campestre/venta?id_property_type=11&business_type%5B0%5D=for_sale' },
    { name: 'Casa Comercial', url: 'https://vistainmobiliaria.inmo.co/s/casa-comercial/venta?id_property_type=27&business_type%5B0%5D=for_sale' },
    { name: 'Casa con Renta', url: 'https://vistainmobiliaria.inmo.co/s/casa-con-renta/venta?id_property_type=29&business_type%5B0%5D=for_sale' },
    { name: 'Consultorio', url: 'https://vistainmobiliaria.inmo.co/s/consultorio/venta?id_property_type=15&business_type%5B0%5D=for_sale' },
    { name: 'Edificio', url: 'https://vistainmobiliaria.inmo.co/s/edificio/venta?id_property_type=16&business_type%5B0%5D=for_sale' },
    { name: 'Finca', url: 'https://vistainmobiliaria.inmo.co/s/finca/venta?id_property_type=7&business_type%5B0%5D=for_sale' },
    { name: 'Finca - Hoteles', url: 'https://vistainmobiliaria.inmo.co/s/finca-hoteles/venta?id_property_type=13&business_type%5B0%5D=for_sale' },
    { name: 'Hoteles', url: 'https://vistainmobiliaria.inmo.co/s/hoteles/venta?id_property_type=12&business_type%5B0%5D=for_sale' },
    { name: 'Local', url: 'https://vistainmobiliaria.inmo.co/s/local/venta?id_property_type=3&business_type%5B0%5D=for_sale' },
    { name: 'Lote - Terreno', url: 'https://vistainmobiliaria.inmo.co/s/lote-terreno/venta?id_property_type=5&business_type%5B0%5D=for_sale' },
    { name: 'Oficina', url: 'https://vistainmobiliaria.inmo.co/s/oficina/venta?id_property_type=4&business_type%5B0%5D=for_sale' }
  ];

  rentOptions = [
    { name: 'Apartaestudio', url: 'https://vistainmobiliaria.inmo.co/s/apartaestudio/alquiler?id_property_type=14&business_type%5B0%5D=for_rent' },
    { name: 'Apartamento', url: 'https://vistainmobiliaria.inmo.co/s/apartamento/alquiler?id_property_type=2&business_type%5B0%5D=for_rent' },
    { name: 'Bodega', url: 'https://vistainmobiliaria.inmo.co/s/bodega/alquiler?id_property_type=8&business_type%5B0%5D=for_rent' },
    { name: 'Casa', url: 'https://vistainmobiliaria.inmo.co/s/casa/alquiler?id_property_type=1&business_type%5B0%5D=for_rent' },
    { name: 'Casa Campestre', url: 'https://vistainmobiliaria.inmo.co/s/casa-campestre/alquiler?id_property_type=11&business_type%5B0%5D=for_rent' },
    { name: 'Casa Comercial', url: 'https://vistainmobiliaria.inmo.co/s/casa-comercial/alquiler?id_property_type=27&business_type%5B0%5D=for_rent' },
    { name: 'Consultorio', url: 'https://vistainmobiliaria.inmo.co/s/consultorio/alquiler?id_property_type=15&business_type%5B0%5D=for_rent' },
    { name: 'Edificio', url: 'https://vistainmobiliaria.inmo.co/s/edificio/alquiler?id_property_type=16&business_type%5B0%5D=for_rent' },
    { name: 'Local', url: 'https://vistainmobiliaria.inmo.co/s/local/alquiler?id_property_type=3&business_type%5B0%5D=for_rent' },
    { name: 'Oficina', url: 'https://vistainmobiliaria.inmo.co/s/oficina/alquiler?id_property_type=4&business_type%5B0%5D=for_rent' }
  ];

  exchangeOptions = [
    { name: 'Apartamento', url: 'https://vistainmobiliaria.inmo.co/s/apartamento/permutar?id_property_type=2&business_type%5B0%5D=for_transfer' },
    { name: 'Casa', url: 'https://vistainmobiliaria.inmo.co/s/casa/permutar?id_property_type=1&business_type%5B0%5D=for_transfer' },
    { name: 'Casa Campestre', url: 'https://vistainmobiliaria.inmo.co/s/casa-campestre/permutar?id_property_type=11&business_type%5B0%5D=for_transfer' },
    { name: 'Casa Comercial', url: 'https://vistainmobiliaria.inmo.co/s/casa-comercial/permutar?id_property_type=27&business_type%5B0%5D=for_transfer' },
    { name: 'Finca', url: 'https://vistainmobiliaria.inmo.co/s/finca/permutar?id_property_type=7&business_type%5B0%5D=for_transfer' },
    { name: 'Lote - Terreno', url: 'https://vistainmobiliaria.inmo.co/s/lote-terreno/permutar?id_property_type=5&business_type%5B0%5D=for_transfer' }
  ];
  

}
