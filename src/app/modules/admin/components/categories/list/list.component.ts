import { AfterViewInit, Component, ViewChild, OnInit, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, AfterViewInit {
  categories: any[] = [];
  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource<any>(this.categories);
  constructor(private categoryService: CategoryService) {
    this.categoryService.getCategories().subscribe((res) => {
      this.categories = res;
      // console.log()
    })
  }
  ngOnInit() {
    console.log(this.categories)
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    console.log(this.categories)
    this.dataSource.paginator = this.paginator;
  }

  asd(){
    this.dataSource.data = this.categories;
  }
}
