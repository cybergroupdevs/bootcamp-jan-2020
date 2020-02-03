using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace WebApplication2.Models
{
    public partial class companyinfoContext : DbContext
    {
        public companyinfoContext()
        {
        }

        public companyinfoContext(DbContextOptions<companyinfoContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Tcompanydata> Tcompanydata { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=CYG291;Database=companyinfo;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Tcompanydata>(entity =>
            {
                entity.HasKey(e => e.CusId);

                entity.ToTable("tcompanydata");

                entity.Property(e => e.CusId).HasColumnName("cus_id");

                entity.Property(e => e.Designation)
                    .IsRequired()
                    .HasColumnName("designation")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnName("email")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.PhoneNo)
                    .IsRequired()
                    .HasColumnName("phone_no")
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });
        }
    }
}
