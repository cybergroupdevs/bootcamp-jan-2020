using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;

namespace WebApplication2.Models
{
    public partial class companyinfoContext : DbContext
    {
        //IConfiguration _config;
        //public companyinfoContext(IConfiguration config)
        //{
        //    _config = config;
        //}

        public companyinfoContext(DbContextOptions<companyinfoContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Tcompanydata> Tcompanydata { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            
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
