import { Link } from 'react-router-dom';

import './envelope-page.css';

import Sender from '../../components/Sender/Sender';
import Receiver from '../../components/Receiver/Receiver';
import Stamp from '../../components/Stamp/Stamp';
import AirMailSticker from '../../components/AirMailSticker/AirMailSticker';
import TextBlock from '../../components/TextBlock/TextBlock';

export default function EnvelopePage() {
  return (
    <section className="envelope-page">
      <Sender className="envelope-page__sender" />
      <Stamp className="envelope-page__stamp" />
      <AirMailSticker className="envelope-page__air-mail-sticker" />
      <Receiver className="envelope-page__receiver" />
      <Link className="envelope-page__open-letter" to="/letter">
        <TextBlock name="Open" />
      </Link>
    </section>
  );
}
