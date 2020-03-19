import StartView from './components/StartView.js';
import './styles/main.scss';

if (document.getElementById('app')) {
    new StartView(document.getElementById('app')).run();
}
