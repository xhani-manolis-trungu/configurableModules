import { DefaultConfig } from './model/config';
import { InjectionToken } from '@angular/core';

export const AppConfigTokenService = new InjectionToken<DefaultConfig>('AppConfig');
