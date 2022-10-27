import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import cn from 'classnames'
import styles from './baucua.module.scss'
import { playGame } from '../actions/baucuaActions';


const XucXac = () => {
  const { xucXac } = useSelector((state) => state.baucua);
  const dispatch = useDispatch();

  const handlePlayGame = () => {
    dispatch(playGame());
  }

  return (
    <div>
      <div className={cn(
        "d-flex flex-column justify-content-center align-items-center",
        styles.dice
      )}
      >
        {xucXac.map((item) => (
          <img
            src={`./img/${item}.png`}
            alt={item}
            width={70}
            height={70}
            className="mb-3"
          />
        ))}
        <button className="btn btn-success px-5 py-3" onClick={handlePlayGame}>Xốc</button>
      </div>
    </div>
  );
};

export default XucXac