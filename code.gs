// code.gs

function doGet() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('index')
    .setTitle('CSV Import App')
    .setWidth(400);
  return htmlOutput;
}

function importCSVData(data, columns, filterColumn, filterValue, appendData, sheetName) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
    
    if (!sheet && !appendData) {
      sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(sheetName);
    }

    var csvData = Utilities.parseCsv(data);
    var filteredData = filterCSVData(csvData, columns, filterColumn, filterValue);
    
    if (appendData) {
      var lastRow = sheet.getLastRow();
      sheet.getRange(lastRow + 1, 1, filteredData.length, filteredData[0].length).setValues(filteredData);
    } else {
      sheet.clear();
      sheet.getRange(1, 1, filteredData.length, filteredData[0].length).setValues(filteredData);
    }

    return "Data imported successfully.";
  } catch (error) {
    return "Error: " + error.toString();
  }
}

function filterCSVData(data, columns, filterColumn, filterValue) {
  var filteredData = [];
  var headerRow = data[0];

  var columnIndex = headerRow.indexOf(filterColumn);
  if (columnIndex === -1) {
    throw new Error("Filter column not found in CSV.");
  }

  filteredData.push(headerRow);

  for (var i = 1; i < data.length; i++) {
    var rowData = data[i];
    if (rowData[columnIndex] === filterValue) {
      var filteredRow = [];
      for (var j = 0; j < columns.length; j++) {
        var column = columns[j];
        var columnIndex = headerRow.indexOf(column);
        if (columnIndex !== -1) {
          filteredRow.push(rowData[columnIndex]);
        }
      }
      filteredData.push(filteredRow);
    }
  }

  return filteredData;
}
