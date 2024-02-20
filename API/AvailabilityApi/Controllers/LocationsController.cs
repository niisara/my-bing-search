using AvailabilityApi.Models;
using Microsoft.AspNetCore.Mvc;
using System.Globalization;

namespace AvailabilityApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationsController : ControllerBase
    {
        private static List<Location> _locations = SampleData.Locations;

        [HttpGet("available")]
        public IActionResult GetAvailableLocations([FromQuery] string from, [FromQuery] string to)
        {
            // Parse the time strings to TimeSpan objects
            TimeSpan fromTime;
            TimeSpan toTime;

            try
            {
                fromTime = TimeSpan.ParseExact(from, @"hh\:mm", CultureInfo.InvariantCulture);
                toTime = TimeSpan.ParseExact(to, @"hh\:mm", CultureInfo.InvariantCulture);
            }
            catch (FormatException)
            {
                return BadRequest("Invalid time format. Please use 'HH:mm' 24-hour format.");
            }

            var availableLocations = _locations.Where(location =>
                location.OpeningTime <= fromTime && location.ClosingTime >= toTime).ToList();

            return Ok(availableLocations);
        }

        [HttpPost]
        public IActionResult AddLocation([FromBody] Location location)
        {
            _locations.Add(location);
            return CreatedAtAction(nameof(GetLocation), new { id = location.Id }, location);
        }

        [HttpGet("{id}")]
        public IActionResult GetLocation(int id)
        {
            var location = _locations.FirstOrDefault(l => l.Id == id);
            if (location == null)
            {
                return NotFound();
            }
            return Ok(location);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateLocation(int id, [FromBody] Location updatedLocation)
        {
            var location = _locations.FirstOrDefault(l => l.Id == id);
            if (location == null)
            {
                return NotFound();
            }

            location.Name = updatedLocation.Name;
            location.Type = updatedLocation.Type;
            location.OpeningTime = updatedLocation.OpeningTime;
            location.ClosingTime = updatedLocation.ClosingTime;

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteLocation(int id)
        {
            var location = _locations.FirstOrDefault(l => l.Id == id);
            if (location == null)
            {
                return NotFound();
            }

            _locations.Remove(location);
            return NoContent();
        }
    }
}
