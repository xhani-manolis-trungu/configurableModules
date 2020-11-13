import { Inject, Injectable } from '@angular/core';
import { rejects } from 'assert';
import { AppConfigTokenService } from './app-config-token.service';


@Injectable()
export class AppConfigService {

  resultsArray: string[] = [];

  private client = {
    getEntries: function getEntries(contentType: any): any {
      return contentType;
    },
    prom: function getProm(results?: string[]): string[] {
      return results;
    },
    getFinal: function getFinal(array?: string[]) {
      this.resultsArray = [...array];
    },
    returnFinalResult: function getArr(): string[] {
      return this.resultsArray;
    }
  };

  private final: string[] = this.client.returnFinalResult();

  public contentful = {
    createClient: function createClient({ id, accessToken }): any[] {
      if ((id && accessToken) && (id !== null && accessToken !== null)) {
        if (id !== '1') {
          // tslint:disable-next-line: no-shadowed-variable
          const articles = [
            {
              title: 'Hello world in JS',
              content: `LDfjsadl;kjfae;lkjdaslfj sfadl;j;aldskjfsadl;kj fsdalfj;adslkjfad;s`
            },
            {
              title: 'Hello world in Python',
              content: `;lSDJFsfda SA:LDFJKdl;skjfasdkljf sdl;fajlkjfasljkads \n dflkasj;flkja;lskjfds`
            },
            {
              title: 'Hello world in C#',
              content: ';dlskjafdls;kjflkadsj;lfj dfs;alfkjsdlkfj'
            }
          ];
          return articles;
        }
        // tslint:disable-next-line: prefer-const
        let articles = [
          {
            title: 'Hello world in JS',
            content: `Other config`
          },
          {
            title: 'Hello world in Python',
            content: `;lSDJFsfda SA:LDFJKdl;skjfasdkljf sdl;fajlkjfasljkads \n dflkasj;flkja;lskjfds`
          },
          {
            title: 'Hello world in C#',
            content: ';dlskjafdls;kjflkadsj;lfj dfs;alfkjsdlkfj'
          }
        ];
        return articles;
      }
      return [];
    }
  };

  private initClient() {
    const res = this.contentful.createClient({
      id: this.config.id,
      accessToken: this.config.accessToken
    });
    this.resultsArray = [...res];

    this.client.getFinal(this.client.prom(this.resultsArray));
  }

  constructor(@Inject(AppConfigTokenService) private config) {
    this.initClient();
  }

  public getEntries(contentType?: string): Promise<string[]> {
    if (contentType === 'article') {
      return new Promise((resolve): string[] => {
        resolve(this.resultsArray);
        return this.resultsArray;
      });
    } else {
      return Promise.reject(new Error('Something went wrong with your type requested'));
    }

  }
}
