﻿using System;
using System.Collections.Generic;

namespace DataAccess.Models
{
    public partial class Process
    {
        public Process()
        {
            Phase = new HashSet<Phase>();
        }

        public int ProcessId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedAt { get; set; }
        public string UpdatedBy { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public string Status { get; set; }
        public int CategoryId { get; set; }

        public virtual ProcessCategory Category { get; set; }
        public virtual ICollection<Phase> Phase { get; set; }
    }
}
