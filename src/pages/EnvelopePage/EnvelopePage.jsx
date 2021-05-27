import './envelope-page.css';

import Sender from '../../components/Sender/Sender';
import Receiver from '../../components/Receiver/Receiver';
import Button from '../../components/Button/Button';
import Stamp from '../../components/Stamp/Stamp';
import AirMailSticker from '../../components/AirMailSticker/AirMailSticker';

export default function EnvelopePage() {
  return (
    <section className="envelope-page">
      <Sender className="envelope-page_sender" />
      <Receiver className="envelope-page_receiver" />
      <Button className="envelope-page_button" name="Open" />
      <Stamp className="envelope-page_stamp" />
      <AirMailSticker className="envelope-page_air-mail-sticker" />
    </section>
  );
}
