import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/actions';
import s from './Filter.module.css';

function Filter() {
 const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

    return (
      <div className={s.filterForm}>
        <div className={s.filterGrup}>
          <label className={s.filterGrupLabel}>
            Find contacts by name
            <input
              className={s.filterGrupInput}
              type="text"
              name="filter"
              value={filter}
              onChange={e => dispatch(filterContact(e.currentTarget.value))}
            />
          </label>
        </div>
      </div>
    );
  }



export default Filter;
