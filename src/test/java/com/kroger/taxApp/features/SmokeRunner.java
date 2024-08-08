package com.kroger.taxService.features;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;
import com.krogerqa.karatecentral.utilities.BaseTestRunner;
import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;
import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;


import java.io.File;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;


public class SmokeRunner extends BaseTestRunner {
    @Test
    public void regressionTest() {
        Results results = Runner.path("src/test/java/com/kroger/taxService/features/groups/DbConnect")
                .outputJunitXml(true)
                .outputCucumberJson(true)
                .tags("@regression")
                .parallel(1);
        generateReport(results.getReportDir());
       // Assert.assertEquals(0, results.getFailCount());
        Assertions.assertEquals(0,results.getFailCount());
    }


//    @Test
//    void importQmetry() {
//        Results results = Runner.path("classpath:com/kroger/taxService/features")
//                .outputCucumberJson(true)
//                .outputJunitXml(true)
//                .tags("@regression" + "qmetry")
//                .parallel(999);
//        //assertTrue(results.getFailCount() == 0, results.getErrorMessages() );
//        Assertions.assertTrue(results.getFailCount()==0,results.getErrorMessages());
//    }

    public static void generateReport(String karateOutputPath) {
        Collection<File> jsonFiles = FileUtils.listFiles(new File(karateOutputPath), new String[] {"json"}, true);
        List<String> jsonPaths = new ArrayList<>(jsonFiles.size());
        jsonFiles.forEach(file -> jsonPaths.add(file.getAbsolutePath()));
        Configuration config = new Configuration(new File("target"), "Karate API : Groups sub-domain Regression Test");
        ReportBuilder reportBuilder = new ReportBuilder(jsonPaths, config);
        reportBuilder.generateReports();
    }
}
