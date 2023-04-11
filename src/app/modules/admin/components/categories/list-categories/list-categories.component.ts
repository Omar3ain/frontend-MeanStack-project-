import { Component, OnInit } from '@angular/core';
import { CategoryService} from '../../../services/category.service';
import { ToastrService } from 'ngx-toastr';
import toastr_options from "../../../../../utils/toastr.options";
import swalOptions from "../../../../../utils/swal.options";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddCategoryComponent } from '../add-category/add-category.component'
import { UpdateCategoryComponent } from '../update-category/update-category.component'
import swal from 'sweetalert2';
@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {
  categroies: categroyElement[] = [];
  page: number = 1;
  dialogConfig = new MatDialogConfig();
  searchTerm : string = '';
  constructor(private _categoryService: CategoryService, private toastr: ToastrService, public dialog: MatDialog) {
    this._categoryService.buttonClicked.subscribe(() => {
      this.getcategroies();
    })
  }
  get filteredCategories(): categroyElement[] {
    return this.categroies.filter(category =>
      category.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }


  ngOnInit() {
    this.getcategroies();
  }

  ngAfterViewInit() {
  }
  openAddDialog() {

    const dialogRef = this.dialog.open(AddCategoryComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUpdateDialog(id: string) {
    this.dialogConfig.data = {
      categroyId: id
    };
    const dialogRef = this.dialog.open(UpdateCategoryComponent, this.dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getcategroies() {
      this._categoryService.getCategories().subscribe({
        next: (data: any) => {
          this.categroies = data.categories.map((categroy: any, index: number) => ({
            ...categroy,
            id: index + 1
          }));
        },
        error: (error) => {
          let { error: { message } } = error;
          if (!message) message = error.message;
          this.toastr.error(`MESSAGE : ${message}`, 'Could not load categroys data', toastr_options);
        }
      }
    );
  }

  deleteCategroy(id: string) {
    swal.fire(swalOptions.deleteCategoryOptions).then((result) => {
        if (result.value) {
          this._categoryService.deleteCategroy(id).subscribe({
              next: (data) => {
                this._categoryService.buttonClicked.emit();
                this.toastr.success(`Data Deleted successfully`, 'Insert status', toastr_options);
              },
              error: (error) => {
                let { error: { message } } = error;
                if (!message) message = error.message;
                this.toastr.error(`MESSAGE : ${message}`, 'Could not delete categroy data', toastr_options);
              }
            }
          )
        }
      }
    )
  }

}

export interface categroyElement {
  id?: number;
  _id?: string;
  name: string;
  creator: number;
  cover?: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
 