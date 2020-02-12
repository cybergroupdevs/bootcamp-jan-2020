using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace EmployeeProject.DbModels
{
    public partial class projectContext : DbContext
    {
        public projectContext()
        {
        }

        public projectContext(DbContextOptions<projectContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Temployee> Temployee { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Temployee>(entity =>
            {
                entity.HasKey(e => e.EmpEmail);

                entity.ToTable("temployee");

                entity.Property(e => e.EmpEmail)
                    .HasColumnName("empEmail")
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .ValueGeneratedNever();

                entity.Property(e => e.EmpExp)
                    .HasColumnName("empExp")
                    .HasColumnType("decimal(5, 2)");

                entity.Property(e => e.EmpGender)
                    .IsRequired()
                    .HasColumnName("empGender")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.EmpId)
                    .HasColumnName("empID")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.EmpJoining)
                    .HasColumnName("empJoining")
                    .HasColumnType("date");

                entity.Property(e => e.EmpName)
                    .IsRequired()
                    .HasColumnName("empName")
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.EmpPassword)
                    .IsRequired()
                    .HasColumnName("empPassword")
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.EmpPhone).HasColumnName("empPhone");

                entity.Property(e => e.EmpPm)
                    .HasColumnName("empPM")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.EmpProject)
                    .HasColumnName("empProject")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.EmpRole)
                    .IsRequired()
                    .HasColumnName("empRole")
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasDefaultValueSql("('Employee')");
            });
        }
    }
}
