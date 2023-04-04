import { AfterViewInit, Component, ViewChild, OnInit, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  categories: any[] = [];
  displayedColumns: string[] = ['ID','name', 'creator'];
  dataSource = new MatTableDataSource<any>(this.categories);
  constructor(private categoryService: CategoryService) {
    this.categoryService.getCategories().subscribe((res) => {
      this.dataSource.data = this.categories= res.categories;
    })
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  asd(){
    this.dataSource.data = this.categories;
  }
}
