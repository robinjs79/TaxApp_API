Feature: Connection to DB

  Background:
# use jdbc to validate
    * def config = { username: 'AvalarataxAdmin', password: 'BKa#S?4?fw', url: 'jdbc:sqlserver://sqlserver-avalara-testa41.database.windows.net:1433;databaseName=avalara-tax-db-serverless', driverClassName: 'com.microsoft.sqlserver.jdbc.SQLServerDriver'  }
    * def DbUtils = Java.type('com.kroger.taxService.features.groups.DbUtils')
    * def db = new DbUtils(config)

  Scenario:
    * def upccode = db.readRows('select top 2 * from Tax_APP.Avalara_UPC')
    Then print upccode