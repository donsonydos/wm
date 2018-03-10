import { NgModule } from '@angular/core';
import { PublicityComponent } from './publicity/publicity';
import { CalendarComponent } from './calendar/calendar';
@NgModule({
	declarations: [PublicityComponent,
    CalendarComponent],
	imports: [],
	exports: [PublicityComponent,
    CalendarComponent]
})
export class ComponentsModule {}
