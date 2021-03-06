import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {AdminService} from '../../services/admin.service';
@Component({
  selector: 'app-subcategory-modal',
  templateUrl: './subcategory-modal.component.html',
  styleUrls: ['./subcategory-modal.component.css']
})
export class SubcategoryModalComponent implements OnInit {
   subcategoryform:FormGroup;
   category:any;
  constructor(public subDialogref:MatDialogRef<SubcategoryModalComponent>,@Inject(MAT_DIALOG_DATA)public data:string,private formBuilder:FormBuilder,private service:AdminService)
   {

   }

  ngOnInit() {
    this.createForm();
    this.generateSubcategory(this.data);

  }
   createForm()
   {
     this.subcategoryform=this.formBuilder.group({
       id:['',Validators.required],
       name:['',Validators.required],
       category:['',Validators.required]
     });
   }
   resetForm()
   {
     this.subcategoryform.reset();
   }
   generateSubcategory(data)
   {

     this.service.getSubcategorys(data).subscribe(res=>{
         console.log(res.result);
     this.subcategoryform.setValue({
       id:res.result.id,
       name:'seed',
       category:'1'
     });
     },err=>{

     });
   }
   generateCategory()
   {
     this.service.getCategory().subscribe(res=>{
       this.category=res;
     });
   }
   updatesubCategory(id,name,category)
   {
     this.service.updatesubCategory(id,name,category).subscribe(res=>{
       this.subDialogref.close();
        this.resetForm();
     },err=>{
       this.subDialogref.close();
        this.resetForm();
     });
   }
}
