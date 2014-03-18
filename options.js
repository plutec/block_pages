// Saves options to chrome.storage
function save_options() {
  var block_time = document.getElementById('block_time').value;
  var using_time = document.getElementById('using_time').value;
  //var block_sites = document.getElementById('block_sites').value;
  var block_sites = ['twitter.com', 'facebook.com']
  //var color = document.getElementById('color').value;
  //var likesColor = document.getElementById('like').checked;
  
  chrome.storage.sync.set({
    block_time: block_time,
    using_time: using_time,
    block_sites: block_sites,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 1250);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    block_time: 60,
    using_time: 5,
    block_sites: [],
  }, function(items) {
    document.getElementById('block_time').value = items.block_time;
    document.getElementById('using_time').value = items.using_time;
    textarea = document.getElementById('block_sites');
    for (var i=0; i<items.block_sites.length; ++i) { 
      //document.write(cars[i] + "<br>");
      console.log(items.block_sites[i])
      document.getElementById('block_sites').value += items.block_sites[i] + '\n'
    }
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);