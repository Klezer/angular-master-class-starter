import { EventBusArgs } from './event-bus-args';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';

export class EventBusService {
  private _messages$ = new Subject<EventBusArgs>();

  emit(eventType: string, data: any) {
    this._messages$.next({ type: eventType, data: data });
  }

  observe(eventType: string) {
    return this._messages$
               .filter(args => args.type === eventType)
               .map(args => args.data);
  }
}
