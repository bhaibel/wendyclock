IrregularGentlewomen = {}

IrregularGentlewomen.toggleIncident = function(eventListItem) {
  eventListItem.toggleClass('collapsed');
}

$(document).ready(function() {
  $('#timeline').on('click', '.circle', function(e) {
    IrregularGentlewomen.toggleIncident($(e.target).parents('.work'));
  });
});