import neo4j from 'neo4j-driver'
import { Driver } from 'neo4j-driver-core';

class MoviesDb {
  public driver: Driver;

  constructor() {
    this.driver =  neo4j.driver( 'neo4j://localhost', neo4j.auth.basic('neo4j', 'test1234') )
  }
}

export default new MoviesDb().driver;