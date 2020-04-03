import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '@delon/theme';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';

@Component({
  selector: 'header-qrcode',
  template: `
    <div class="alain-default__nav-item" nz-dropdown [nzDropdownMenu]="wechatMenu">
      <i nz-icon nzType="wechat" nzTheme="outline"></i>
    </div>
    <nz-dropdown-menu #wechatMenu="nzDropdownMenu">
      <div class="wechatMenu" style="padding:20px 20px 0;background-color: #722ED1">
        <img src="assets/qrcode.jpg" width=120 height=120 alt="微信公众号">
        <div style="padding:8px 0;width:100%;text-align:center;color:#fff;">洞察Insights公众号</div>
      </div>
    </nz-dropdown-menu>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderQrcodeComponent {
  constructor(
    private router: Router,
  ) {}


}
