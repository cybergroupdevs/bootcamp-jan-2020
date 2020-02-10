using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace EmployeeManagement.DbModels
{
    public partial class EmployeeDBContext : DbContext
    {
       
        public EmployeeDBContext(DbContextOptions<EmployeeDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TEmployee> TEmployee { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TEmployee>(entity =>
            {
                entity.HasKey(e => e.EmpId);

                entity.ToTable("tEmployee");

                entity.Property(e => e.EmpId).HasColumnName("EmpID");

                entity.Property(e => e.Designation)
                    .HasColumnName("designation")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .HasColumnName("email")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.FName)
                    .HasColumnName("fName")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Lname)
                    .HasColumnName("LName")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Manager)
                    .HasColumnName("manager")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Passwrd)
                    .HasColumnName("passwrd")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Project)
                    .HasColumnName("project")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Salary).HasColumnName("salary");
            });
        }
    }
}
