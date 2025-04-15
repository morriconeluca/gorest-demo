import { TCard } from './card.models';
import * as S from './card.styles';

export const Card = ({ children, label, ...rest }: TCard) => {
  return (
    <article {...rest}>
      {label && <p className={S.label}>{label}</p>}
      <div className={S.card[label ? 'true' : 'false']}>{children}</div>
    </article>
  );
};
