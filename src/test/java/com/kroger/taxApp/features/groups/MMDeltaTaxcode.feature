Feature:API to load MM TaxCode Delta file to TaxApp.

  @regression
  Scenario Outline: Post API to validate MMDelta_TaxCode file load returns 202|<TestCase>

    # Reading input JOSN from file.
   # * def MMTaxCodeRequest = read ('classpath:Data/Output/MMDeltaTaxcodeFileLoad/InputJson/<getRequest>')
     # Reading expected response.
    * def MMTaxCodeResponse = read ('classpath:data/Output/MMDeltaTaxcodeFileLoad/OutputJson/<ExpectedResponse>')
    * def stats = 202
    Given header Authorization = 'Bearer ' + authToken
    Given url baseURL
    And path mmdelta
    When method post
    Then status 202
    Then karate.log('\nActual Response:\n', response , '\nExpectedResponse: \n', MMTaxCodeResponse)
    And match response == MMTaxCodeResponse
    And print {"Actual status": responseStatus}
    And match responseStatus == stats


    Examples:
      |TestCase | ExpectedResponse |
      |validate Response status code is 202 for MMTaxCode| 202_Response.json |



#Feature: API to load MM TaxCode Delta file to TaxApp and check the TaxCode is loaded.
#
#
#  Background:
## use jdbc to validate
#    * def config = { username: 'AvalarataxAdmin', password: 'BKa#S?4?fw', url: 'jdbc:sqlserver://sqlserver-avalara-testa41.database.windows.net:1433;databaseName=avalara-tax-db-serverless', driverClassName: 'com.microsoft.sqlserver.jdbc.SQLServerDriver'  }
#    * def DbUtils = Java.type('com.kroger.taxService.features.groups.DbUtils')
#    * def db = new DbUtils(config)
#
#
#  @regression
#  Scenario:
#
#    * def taxcode = [{"TAX_CD_ID":"PH101080"}]
#
#    * def Taxapp_taxcode = db.readRows("select TAX_CD_ID from Tax_APP.TAX_CD_MASTER WHERE TAX_CD_ID= 'PH101080' ")
#    * print Taxapp_taxcode
#    And match taxcode == Taxapp_taxcode
#
#Feature: API to load MM TaxCode Delta file to TaxApp and check the TaxCode is not exist.
#
#
#  Background:
## use jdbc to validate
#    * def config = { username: 'AvalarataxAdmin', password: 'BKa#S?4?fw', url: 'jdbc:sqlserver://sqlserver-avalara-testa41.database.windows.net:1433;databaseName=avalara-tax-db-serverless', driverClassName: 'com.microsoft.sqlserver.jdbc.SQLServerDriver'  }
#    * def DbUtils = Java.type('com.kroger.taxService.features.groups.DbUtils')
#    * def db = new DbUtils(config)
#
#
#  @regression
#  Scenario:
#
#    * def taxcode = []
#
#    * def Taxapp_taxcode = db.readRows("select TAX_CD_ID from Tax_APP.TAX_CD_MASTER WHERE TAX_CD_ID= 'PH101081' ")
#    * print Taxapp_taxcode
#    And match taxcode == Taxapp_taxcode