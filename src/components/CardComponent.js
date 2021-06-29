import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import styles from '../styles/components/CardComponent.module.css';

const Example = (props) => {
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <CardImg className={styles.img} top width="100%" src={props.img} alt="Card image cap" />
        <CardBody>
          <CardTitle className={styles.title} tag="h5">{props.title}</CardTitle>
          <CardSubtitle style={{color:'#bbb', fontWeight:500}} className="mb-2">{props.subTitle}</CardSubtitle>
          <CardText className={styles.content}>{props.content}</CardText>   
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;