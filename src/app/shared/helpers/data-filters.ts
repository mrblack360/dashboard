import { DataPoint } from '../interfaces/data-point';

export function getConfirmedDataPoints(countryData: any[]): DataPoint[] {
  let dataPoints: DataPoint[] = [];
  let x: Date;
  let y: number;
  let DataPointObject: DataPoint;
  for (let i = 53; i < countryData.length; i++) {
    x = new Date(countryData[i].Date);
    y = countryData[i].Confirmed;
    DataPointObject = { x: x, y: y };
    dataPoints.push(DataPointObject);
  }
  return dataPoints;
}
export function getDeathDataPoints(countryData: any[]): DataPoint[] {
  let dataPoints: DataPoint[] = [];
  let x: Date;
  let y: number;
  let DataPointObject: DataPoint;
  for (let i = 53; i < countryData.length; i++) {
    x = new Date(countryData[i].Date);
    y = countryData[i].Deaths;
    DataPointObject = { x: x, y: y };
    dataPoints.push(DataPointObject);
  }
  return dataPoints;
}
export function getRecoveredDataPoints(countryData: any[]): DataPoint[] {
  let dataPoints: DataPoint[] = [];
  let x: Date;
  let y: number;
  let DataPointObject: DataPoint;
  for (let i = 53; i < countryData.length; i++) {
    x = new Date(countryData[i].Date);
    y = countryData[i].Recovered;
    DataPointObject = { x: x, y: y };
    dataPoints.push(DataPointObject);
  }
  return dataPoints;
}
