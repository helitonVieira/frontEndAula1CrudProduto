<<<<<<< HEAD
import { Produto } from './../product.model';
=======
import { Product } from './../product.model';
>>>>>>> 786915fc5ad7e129b4831ca55c6529dc28da35c4
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

<<<<<<< HEAD
const EXAMPLE_DATA: Produto[] = [
  {id: 1, nome: 'Hydrogen', subcategoria:{id: 1 ,descricao:""}, preco: 9.99},  
  {id: 2, nome: 'Helium',  subcategoria:{id: 1 ,descricao:""}, preco : 9.99},
  {id: 3, nome: 'Lithium',  subcategoria:{id: 1 ,descricao:""}, preco : 9.99},
  {id: 4, nome: 'Beryllium',  subcategoria:{id: 1 ,descricao:""}, preco : 9.99},
  {id: 5, nome: 'Boron',  subcategoria:{id: 1 ,descricao:""}, preco : 9.99},
  {id: 6, nome: 'Carbon',  subcategoria:{id: 1 ,descricao:""}, preco : 9.99},
  {id: 7, nome: 'Nitrogen',  subcategoria:{id: 1 ,descricao:""}, preco : 9.99},
  {id: 8, nome: 'Oxygen',  subcategoria:{id: 1 ,descricao:""}, preco : 9.99},
  {id: 9, nome: 'Fluorine',  subcategoria:{id: 1 ,descricao:""}, preco : 9.99},
  {id: 10, nome: 'Neon',  subcategoria:{id: 1 ,descricao:""}, preco : 9.99},
  {id: 11, nome: 'Sodium',  subcategoria:{id: 1 ,descricao:""}, preco : 9.99},
  {id: 12, nome: 'Magnesium',  subcategoria:{id: 1 ,descricao:""}, preco : 9.99},
  {id: 13, nome: 'Aluminum',  subcategoria:{id: 1 ,descricao:""}, preco : 9.99},
  {id: 14, nome: 'Silicon',  subcategoria:{id: 1 ,descricao:""}, preco : 9.99},
  {id: 15, nome: 'Phosphorus',  subcategoria:{id: 1 ,descricao:""}, preco : 9.99},
  {id: 16, nome: 'Sulfur',  subcategoria:{id: 1 ,descricao:""}, preco : 9.99},
  {id: 17, nome: 'Chlorine',  subcategoria:{id: 1 ,descricao:""}, preco : 9.99},
  {id: 18, nome: 'Argon',  subcategoria:{id: 1 ,descricao:""}, preco : 9.99},
  {id: 19, nome: 'Potassium',  subcategoria:{id: 1 ,descricao:""}, preco : 9.99},
  {id: 20, nome: 'Calcium',  subcategoria:{id: 1 ,descricao:""}, preco : 9.99},
=======
const EXAMPLE_DATA: Product[] = [
  {id: 1, name: 'Hydrogen', price: 9.99},  
  {id: 2, name: 'Helium', price: 9.99},
  {id: 3, name: 'Lithium', price: 9.99},
  {id: 4, name: 'Beryllium', price: 9.99},
  {id: 5, name: 'Boron', price: 9.99},
  {id: 6, name: 'Carbon', price: 9.99},
  {id: 7, name: 'Nitrogen', price: 9.99},
  {id: 8, name: 'Oxygen', price: 9.99},
  {id: 9, name: 'Fluorine', price: 9.99},
  {id: 10, name: 'Neon', price: 9.99},
  {id: 11, name: 'Sodium', price: 9.99},
  {id: 12, name: 'Magnesium', price: 9.99},
  {id: 13, name: 'Aluminum', price: 9.99},
  {id: 14, name: 'Silicon', price: 9.99},
  {id: 15, name: 'Phosphorus', price: 9.99},
  {id: 16, name: 'Sulfur', price: 9.99},
  {id: 17, name: 'Chlorine', price: 9.99},
  {id: 18, name: 'Argon', price: 9.99},
  {id: 19, name: 'Potassium', price: 9.99},
  {id: 20, name: 'Calcium', price: 9.99},
>>>>>>> 786915fc5ad7e129b4831ca55c6529dc28da35c4
];

/**
 * Data source for the ProductRead2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
<<<<<<< HEAD
export class ProductRead2DataSource extends DataSource<Produto> {
  data: Produto[] = EXAMPLE_DATA;
=======
export class ProductRead2DataSource extends DataSource<Product> {
  data: Product[] = EXAMPLE_DATA;
>>>>>>> 786915fc5ad7e129b4831ca55c6529dc28da35c4
  paginator: MatPaginator; //qtd linhas por pagina 
  sort: MatSort; //ordena na parte de cima da coluna 

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
<<<<<<< HEAD
  connect(): Observable<Produto[]> {
=======
  connect(): Observable<Product[]> {
>>>>>>> 786915fc5ad7e129b4831ca55c6529dc28da35c4
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
<<<<<<< HEAD
  private getPagedData(data: Produto[]) {
=======
  private getPagedData(data: Product[]) {
>>>>>>> 786915fc5ad7e129b4831ca55c6529dc28da35c4
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
<<<<<<< HEAD
  private getSortedData(data: Produto[]) {
=======
  private getSortedData(data: Product[]) {
>>>>>>> 786915fc5ad7e129b4831ca55c6529dc28da35c4
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
<<<<<<< HEAD
        case 'nome': return compare(a.nome, b.nome, isAsc);
=======
        case 'name': return compare(a.name, b.name, isAsc);
>>>>>>> 786915fc5ad7e129b4831ca55c6529dc28da35c4
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
