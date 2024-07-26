using System.ComponentModel.DataAnnotations;

namespace EmployeeManagement.Models
{
    public class EmployeeModel
    {
        public int ID { get; set; }

        [Required(ErrorMessage = "FirstName is required")]
        [MaxLength(50)]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "LastName is required")]
        [MaxLength(50)]

        public string LastName { get; set; }

        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage ="Invalid Email Address")]
        [MaxLength(50)]

        public string Email { get; set; }

        [Required(ErrorMessage = "Phone is required")]
        public string Phone { get; set; }

        [Required(ErrorMessage = "Position is required")]
        [MaxLength(20)]

        public string Position { get; set; }
    }
}
