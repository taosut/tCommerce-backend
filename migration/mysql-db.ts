import { Connection, createConnection } from 'mysql';

export class Database {
  /**
   * Database connection object
   *
   * @private
   * @type {Pool}
   * @memberof Database
   */
  private conn: Connection;

  constructor() {
    this.conn = createConnection(`mysql://klondike_stg_u:klondike_stg@173.249.23.253:3306/klondike_stg_base?connectionLimit=10&dateStrings=true`);
    this.conn.connect((err) => {
      if (err) {
        process.exit();
      } else {
        console.log('Mysql connect success!');
      }
    });
  }

  /**
   * Execute passed sql into database
   *
   * @param {string} sql - sql query to execute
   * @param {(Array<string | number> | any)} [params] - data to insert if any
   * @returns {Promise<string[]>}
   * @memberof Database
   */
  public query(sql: string, params?: Array<string | number> | any): Promise<object[]> {
    return new Promise((resolve, reject) => {
      typeof params === 'undefined'
        ? this.conn.query(sql, (err, results) => (err ? reject(err) : resolve(results)))
        : this.conn.query(sql, params, (err, results) => (err ? reject(err) : resolve(results)));
    });
  }

  /**
   * Escape passed value
   *
   * @param {string} param
   * @returns {string}
   * @memberof Database
   */
  public escape(param: string): string {
    return escape(param);
  }
}
