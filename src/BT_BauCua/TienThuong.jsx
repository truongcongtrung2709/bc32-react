import React from 'react'
import { useSelector } from 'react-redux'
import cn from 'classnames'
import styles from './baucua.module.scss'

const TienThuong = () => {
  const { tienThuong } = useSelector((state) => state.baucua);

  return (
    <div className="d-flex justify-content-center">
      <div className={cn("p-3 bg-warning", styles.score)}>
        <span className="me-2">Tiền thưởng:</span>
        <span className="text-success">{tienThuong} điểm</span>
      </div>
    </div>
  );
};

export default TienThuong