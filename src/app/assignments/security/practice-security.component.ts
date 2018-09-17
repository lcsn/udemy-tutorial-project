import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pracitice-security',
  templateUrl: './practice-security.component.html',
  styles: []
})
export class PracticeSecurityComponent implements OnInit {

  title = 'Security'

  dangerousUrl: string;
  trustedUrl;
  htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';

  constructor(private sanitizer: DomSanitizer) {
    // javascript: URLs are dangerous if attacker controlled.
    // Angular sanitizes them in data binding, but you can
    // explicitly tell Angular to trust this value:
    this.dangerousUrl = 'javascript:alert("Hi there")';
    this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
  }

  ngOnInit() {
  }

}
