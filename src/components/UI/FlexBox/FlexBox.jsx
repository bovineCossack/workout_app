import * as S from './FlexBox.styles.js';
import PropTypes from 'prop-types';
function FlexBox({ children }) {
  return <S.FlexBox>{children}</S.FlexBox>;
}

FlexBox.propTypes = {
  children: PropTypes.node,
};
export default FlexBox;
