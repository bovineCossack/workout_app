import * as S from './Grid.styles.js';
import PropTypes from 'prop-types';
function Grid({ children }) {
  return <S.Grid>{children}</S.Grid>;
}

Grid.propTypes = {
  children: PropTypes.node,
};
export default Grid;
