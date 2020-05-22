import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuFaInputComponent } from "./au-fa-input/au-fa-input.component";
import { InputRefDirective } from "./common/directive/input-ref.directive";
import { AuMaInputComponent } from './au-ma-input/au-ma-input.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [AuFaInputComponent, InputRefDirective, AuMaInputComponent],
    exports: [AuFaInputComponent, InputRefDirective, AuMaInputComponent]
})
export class AuInputModule { }