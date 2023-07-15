import { appModule } from './app/app.module';
import { bootstrap } from './framework'
import { wfm } from './framework';
import './style.css'

wfm.delay(2000).then(() => bootstrap(appModule));
