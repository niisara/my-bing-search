namespace AvailabilityApi.Models
{
    public static class SampleData
    {
        public static List<Location> Locations { get; } = new List<Location>
        {
            new Location { Id = 1, Name = "City Pharmacy", Type = "Pharmacy", OpeningTime = TimeSpan.FromHours(9), ClosingTime = TimeSpan.FromHours(17) },
            new Location { Id = 2, Name = "Downtown Bakery", Type = "Bakery", OpeningTime = TimeSpan.FromHours(8), ClosingTime = TimeSpan.FromHours(18) },
            new Location { Id = 3, Name = "Barber King", Type = "Barber Shop", OpeningTime = TimeSpan.FromHours(10), ClosingTime = TimeSpan.FromHours(19) },
            new Location { Id = 4, Name = "Fresh Market", Type = "Supermarket", OpeningTime = TimeSpan.FromHours(7), ClosingTime = TimeSpan.FromHours(22) },
            new Location { Id = 5, Name = "Sweet Treats", Type = "Candy Store", OpeningTime = TimeSpan.FromHours(10), ClosingTime = TimeSpan.FromHours(20) },
            new Location { Id = 6, Name = "Cinema World", Type = "Cinema Complex", OpeningTime = TimeSpan.FromHours(11), ClosingTime = TimeSpan.FromHours(23) },
        };
    }
}

