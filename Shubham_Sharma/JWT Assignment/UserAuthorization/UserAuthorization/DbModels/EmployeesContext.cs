using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace UserAuthorization.DbModels
{
    public partial class EmployeesContext : DbContext
    {
        public EmployeesContext()
        {
        }

        public EmployeesContext(DbContextOptions<EmployeesContext> options)
            : base(options)
        {
        }

        public virtual DbSet<EmployeeDetails> EmployeeDetails { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("server=.; database=Employees; Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<EmployeeDetails>(entity =>
            {
                entity.HasKey(e => e.Username);

                entity.ToTable("Employee_Details");

                entity.Property(e => e.Username)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .ValueGeneratedNever();

                entity.Property(e => e.AdminFlag).HasColumnName("Admin_flag");

                entity.Property(e => e.EmpAddress)
                    .IsRequired()
                    .HasColumnName("Emp_Address")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.EmpFlag).HasColumnName("Emp_Flag");

                entity.Property(e => e.EmpName)
                    .IsRequired()
                    .HasColumnName("Emp_Name")
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.EmpPassword)
                    .IsRequired()
                    .HasColumnName("Emp_Password")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EmpPhone)
                    .IsRequired()
                    .HasColumnName("Emp_Phone")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.EmpProjectId)
                    .IsRequired()
                    .HasColumnName("Emp_ProjectId")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EmpRole)
                    .IsRequired()
                    .HasColumnName("Emp_Role")
                    .HasMaxLength(40)
                    .IsUnicode(false);
            });
        }
    }
}
