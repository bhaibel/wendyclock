IrregularGentlewomen = {}

IrregularGentlewomen.toggleIncident = function(eventListItem) {
  eventListItem.toggleClass('collapsed');
}

$(document).ready(function() {
  $('#timeline').on('.circle', 'click', function(e) {
    IrregularGentlewomen.toggleIncident($(e.target).parents('.work'));
  })
});