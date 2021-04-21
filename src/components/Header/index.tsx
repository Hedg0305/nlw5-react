import {format} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import style from './styles.module.scss'

export default function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMM', {
    locale: ptBR
  });

  return (
    <header className={style.headerContainer}>
      <img src="/logo.svg" alt="Logo" />
      
      <p>O melhor para você ouvir sempre</p>
      <span>{ currentDate}</span>
    </header>
  )
}