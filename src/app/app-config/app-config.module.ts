import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppConfigService } from '../app-config.service';
import { AppConfigTokenService } from './app-config-token.service';
import { CommonModule } from '@angular/common';
import { DefaultConfig } from './model/config';

@NgModule()
export class AppConfigModule {
  static forRoot(config: DefaultConfig): ModuleWithProviders {
    return {
      ngModule: AppConfigModule,
      providers: [
        AppConfigService,
        {
          provide: AppConfigTokenService,
          useValue: config
        }
      ]
    };
  }
 }
