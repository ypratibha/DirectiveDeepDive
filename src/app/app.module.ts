import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicHightlightDirective } from './basic-highlight/basichighlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { StructualCustomDirective } from './structual-custom.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHightlightDirective,
    BetterHighlightDirective,
    StructualCustomDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
