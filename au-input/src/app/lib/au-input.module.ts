import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuFaInputComponent } from "./au-fa-input/au-fa-input.component";
import { InputRefDirective } from "./common/input-ref.directive";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [AuFaInputComponent, InputRefDirective],
    exports: [AuFaInputComponent, InputRefDirective]
})
export class AuInputModule { }